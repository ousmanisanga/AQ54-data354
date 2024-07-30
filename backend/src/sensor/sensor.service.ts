import { HttpService } from '@nestjs/axios';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { firstValueFrom } from 'rxjs'

@Injectable()
export class SensorService {
    constructor(private readonly prisma: PrismaService , private readonly httpService: HttpService){}
    
    // La méthode fetchDataAPI permet de recuperer les données dépuis l'API et de les enregistrés dans la table SensorData de notre DB
    async fetchDataFromAPI(): Promise<void> {

      const url = 'https://airqino-api.magentalab.it/getCurrentValues/SMART188';
      try {
        const response = await firstValueFrom(this.httpService.get(url));
        const data = response.data;
  
        // Log the entire response to inspect its structure
        console.log('Data fetched from API:', JSON.stringify(data, null, 2));
  
        // Verify the data structure
        if (!data || !data.timestamp || !Array.isArray(data.values)) {
          throw new HttpException('Invalid data format received from API', HttpStatus.INTERNAL_SERVER_ERROR);
        }
  
        const timestamp = new Date(data.timestamp);
        if (isNaN(timestamp.getTime())) {
          console.error('Invalid timestamp:', data.timestamp);
          throw new HttpException('Invalid timestamp received from API', HttpStatus.INTERNAL_SERVER_ERROR);
        }
  
        for (const item of data.values) {
          if (typeof item.value !== 'number') {
            console.error('Invalid value:', item.value);
            continue; // Skip this item if the value is invalid
          }
  
          await this.prisma.sensorData.create({
            data: {
              timestamp: timestamp,
              sensor: item.sensor,
              unit: item.unit,
              value: item.value,
            },
          });
        }
      } catch (error) {
        console.error('Error fetching data from API:', error.message);
        if (error.response) {
          console.error('API Response:', JSON.stringify(error.response.data, null, 2));
        }
        throw new HttpException('Error fetching data from API', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    } 

    // Méthode async pour récuperer les données agrégées par en fonction l'heure ou du jour.
    async getAggregatedData(period: 'hourly' | 'daily'): Promise<any> {
      if (period === 'hourly') {
        return this.prisma.$queryRaw`
          SELECT
            date_trunc('hour', "timestamp") AS period,
            AVG("value") AS average_value
          FROM "SensorData"
          GROUP BY period
          ORDER BY period;
        `;
      } else if (period === 'daily') {
        return this.prisma.$queryRaw`
          SELECT
            date_trunc('day', "timestamp") AS period,
            AVG("value") AS average_value
          FROM "SensorData"
          GROUP BY period
          ORDER BY period;
        `;
      }
    }
}
