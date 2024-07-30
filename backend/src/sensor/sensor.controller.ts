import { Controller, Get , Query, HttpException, HttpStatus} from '@nestjs/common';
import { SensorService } from './sensor.service';

@Controller('sensor')
export class SensorController {
    constructor(private readonly sensorService: SensorService){}

    @Get('fetch')
    // La méthode fetchData envoie un message lorsque les données ont éte recuperé et enregistré dans la DB
    async fetchData() {
        try {
            await this.sensorService.fetchDataFromAPI();
        } catch (error) {
            console.error('Error in fetchData:', error.message);
            throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Methode concernant les aggrégation des données en fonction de l'heure ou du jour.
    @Get('aggregate')
    async getAggregatedData(@Query('period') period: 'hourly' | 'daily') {
        return this.sensorService.getAggregatedData(period);
    }
}
