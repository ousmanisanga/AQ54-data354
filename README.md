
# Projet AQ54 

    AQ54 est un projet d'étude de la qualité de l'air à A Abidjan.Il consiste à déployer des capteurs dans la ville dans le but de mesurer la quantité de particules fines dans l'air. 




## Installation

Install backend with npm

```bash
  cd backend 
  npm install 
  
```
Install frontend with npm

```bash
  cd frontend 
  npm install 
  
```

    



## Demo

Insert gif or link to demo


## Running the  App

To run App, run the following command

```bash
  # run with Docker
  docker-compose up --build
```
```bash
  # run migration with docker 
   docker exec -it nest-docker-postgres npx prisma migrate dev --name "init"
```

```bash
  # generate prisma client with docker 
   docker exec -it nest-docker-postgres npx prisma generate
```

```bash
  # db seed  with docker 
   docker exec -it nest-docker-postgres npx prisma db seed 
```
```bash
  # run test  with docker 
   docker exec -it nest-docker-postgres npm test
```





## Authors

- [@ousmanisanga](https://www.github.com/ousmanisanga)


## Run with browser 



```bash
 Pgadmin: http://127.0.0.1:5050/browser/
 Web Application: http://localhost:3001
 Test Api: https://lunar-equinox-780484.postman.co/workspace/testAPI
 API Documentation: http://localhost:3000/api#/ 
```






## Features

- Authentification
- Visualisation des données des stations 
- Tests unitaires
- Enregistrement des utilisateurs.


## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node, Nest JS, Postgres, Prisma, Pgadmin

**Container:** Docker



## API Reference

#### Get all items

```http
  GET /api/item
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.





![Nest](https://docs.nestjs.com/assets/logo-small-gradient.svg)
![React](https://create-react-app.dev/img/logo.svg)
![Docker](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKgAswMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHCAH/xABREAABAwICBAUNCwkHBQAAAAABAAIDBBEFEgYTITEUMkFhkQcVFiJCUVRxdIGS0eE0NVNVlKGxsrPBwyMzNkRSYnJ1hGOChZOjwvAXJHOi0v/EABsBAAIDAQEBAAAAAAAAAAAAAAADAQIEBQYH/8QANREAAgIBAQQGCQQCAwAAAAAAAAECAxEEEiExQQVCUaHB0RQVIjJSYXGx4ROBkfDC8UNTcv/aAAwDAQACEQMRAD8A7iiIgAiIgAiIgAiIgAiIgCxVVtLSZeF1MMGe+XWyBt7b7XVjrzhXxnRfKGetc06uwBfgl+9P+GtH6zUGv1Otqc2uEO5tsxbm6LJ1dLs4GPUayFDxL+4/2eg+vOFfGdF8oZ60684V8Z0XyhnrXnbrfhupEusq8up11srL5c2XpurWJ4dTUsD3wPlc5k+qdnAtxb7LeZWenklnIuPSNcpbOHn6Hppj2yMa+Nwcxwu1zTcEd8KpRei36M4R5DD9QKUWc6AREQAREQAREQAREQAREQAREQARY1XX0dEWisq6eAv4olla2/iurHXzCPjWh+Us9aAJBFH9fMI+NaH5Sz1p18wj41oflLPWgMkgij+vmEfGtD8pZ606+YR8a0PylnrQGTm3V14+CeKf8Nam73y/xFv2S2Xq11tJWvwY0dVBPkE2bVSB+Xib7KAdS1HDtZqnZOGtkvs4urtfpW/SJtbu1eJwelZRjNZfKX+JED3uH8u/FVzGvclV5f8Ahq8MOrOBCPg78/AtXbZxtZe3QqMehkio5zIwtElbmbflGS33JsoyVbyuS8TNXZCV6Sa4v7o73ot+jOEeQw/UClFF6LfozhHkMP1ApRcs9MuAREQSEREAEREAEREAEREAEREAci6ugDq7Awfg5/pjWinDKIS6vPUZtaY9zd+W/Qt76uXu/A/4JvpjWmn3d/WH7NbNPFOO9HI105xn7LxufgYPAqDV6zNU21TZNzdxNulUV9FTwR5oXSEtmMTs4HIL7LK6fcZ8ji+0VWJ/mpfLXfVV5Rjs8BEJ2fqpbT4vwLxweg1+p1lTm12qvZtr5c3RZWut+G6jW56vLqRNazL5S7Lbx3Ui73y/r/wlgt97v8Pb9qmyjBZ3dplrttljM31e/JYxPD6alhc6B8pcyfUuz2te19lldOG0Ym1WsqM2tEV+1tctv0KvGvzFR5e76gV53u/+tb9mo2Ibb3dniMV1rqT2nwfh5mDwSg1Wsz1VtVre53Xt0q3iFHBTxOdC6UlsurdntbdfZZXP1IeRfiKvFvzFR5X/ALEtxjsZwOhZYrUtp8X4HoTRb9GcI8hh+oFKKL0W/RnCPIYfqBSiwHdXAIiIJCIiAC0jqoaWyaPYayjw9+XEawHI4bTEwb3ePkHnPIt3XBtKKo431RK6R5zRUjzCwd4R7LenmPnTKobc1ERqblTU5vkRlNVaWUcDIKWvxCOFg7VjKkgC+3v86KdRdf1fX2s8r681HYu/zO3rGq6+joi0VlXTwF/FEsrW38V1krkPVyaH4lgjTuMco/8AZi4qWWevnLZWTp3XzCPjWh+Us9adfMI+NaH5Sz1rzx1sotbq81RfWGPc3eG5lb4FQavPmqbatsm5u5xsE/0aRgXSNb4J/wAG8dWitpK2uwU0dVBUBjJg4xSB+W5Za9lrJppuF59WcvCS+/7uS1+lRNZRQQsBhdISJjE7Pbk71lnHB8PExi1lVm1xhvZtrhubosn0wlHMcdnMxau6FmJp43Plns+aPnAqrgxZqXZuDRstccYPuR0KjFonxwuL2luerLm84sqeAYZqtbnrLals25l7Odl6bq3iWH01LEXU75SWzmF2e1tgvcWV5p7D3d/4FVSTtWZc31cdnz+hOGjqOHazUuycMz3/AHdXa/SsMYfWCi1fB35uBNjts42svboWH1sohLq89RfW6vud+XN0K1wOg1WszVNtUJdzd17dKvJ5zldvP8CYQxjE+zqvlnHWMzH4ZIqeUyMLQ+tLmk8oyexZBppjWZ9WcvCg+/7uS1+lRFfRQU8ZdC6Qlsurdnt3r7LLOOD4eJ9TrKrNrxDezbXLc1/FZQm3N7uzn9fkWahGqK2uT6v0+ZTwGq4KGal2bguS1xxs97dCoxmN8dPKXtID6q7ecZF8FBhmp1uasy6jXWsy+XNlt47q3ieH01JA+SnfKXMn1ThJa3FvssqTWIPd3/gZVJO5ZfN9XHZ8zvOjWM4VHo5hTJMTomvbRwhzXVDAQcg2HapLr5hHxrQ/KWeteeDhlEJtWX1GbWiO/a2uW36FaFHQGLWB1TbVGXc3cDbpWd6aR0l0jW+Cf8Hozr5hHxrQ/KWetZ0cjJY2yRPa9jwHNc03DgdxBXmKvoqeCJzoTIXMlEZz2txb7LeZeidEf0UwXyCD7NqVZW4PDNVF8bltRJZERLHhedsHcZsXxSZ3GfK5x873Er0SvPUMJoNK8XonixbPKAOYPNvmN1q0bxcjm9LJvSTx/d5LIiLvnhzt65H1b/fXAv4JfrMXWNfD8Kz0guS9W17X4pgeRwdZku437pi8xDifRrfcZp/69/Vv+zWJ+qjyaH66kDTzcLz6s5eEvdfmLLX6VjcDqOD5dUb8Hiba43h9yOhdOUZb93aebrtglH2l1fuyzX8R3lzlJP8AfA/zB32SwMSjfHH27bZ6xzm84KlXUlQa0v1Ry8MdJfZxdXa/TsUxi9p7uaKWziqotvlLwIr9RP8AL4vtVVjP5if+YO+qFf631fBCzUOzcDjjtccYSXI6Fbx2J8dPIXtLQ+tc5vOMu9VlGSg8rl5jK7ISuSi0978Co+7XeWfhrD/Uv6Jv2ikTTzcLL8hy8Jz35slr9KxRRVPBMmqObgoZa442e9uhEoy37u0iu2CUfaXV8S1iv5mfyw/VUm73y/xFv2SjsYjfHBIXtsH1Rc3nGVS5pZ+HazVHJw1sl7ji6u1+lWjF7b3c14i7JxVUW3yl/iRA97h/LvxVcxv3JVeX/hq8MPq+BCPUOz8C1drjjay9uhUY9FJHRzl7SBJW5m84yW+5UlGSreVyXiOrshK9JNPe/uj673d/WR/ZrDZ7j/on/aKQdTzGrzhhy8JY+9+5DLX6Vjto6kUuQxHNwVzLXHGL726FaUZZe7tKV2QxH2l1efyZZxT8zP5UPqL0Foj+imC+QQfZtXn/ABeN7KeUvbYOqQW84yexd90SmiGiuDAyMBFBBszD4Nqx6n3zr9GtOrK/u5Eyit6+H4WP0gsKsx3CKEXrMUooP/JUNb9JWY6RIrjPVZwuTCNJ6fHoGXgq7CS3wjRYjztAt4itwxbqo6OULXCllmr5R3NPGQ30nWHRdc90j0uxzTOI0kdLFS4cXB2QDNcjcS8j6oCZWp7S2eJm1E6v02rHuL0MjZomyxHMxwuCEUTFgMbIw11XPm5cjrDzBF3lO3G+HeeLlTpsvFm7/wA/kxo9GoH3/K2t/ZhXG6MxN4tQR4ox61MQd0qp5oqeMyTPaxg5Sq+i0JZaGesdW5YUu5eRDdjcfhTvQ9qdjcfhTvQ9qmKeeKpibLA8OYeXvK6haWhrKREukdZF4ct/0XkQXY3H4U70PanY3H4S70B61Oop9Ep+Er6z1fx9y8iC7G4/CXegPWnY3H4U70Pap1FHolPwk+s9X8fcvIguxuPwp3oe1OxuPwp3oe1ZcuNUkdU2HPmaeNI3a1p+9SLXNe0OY4OadoINwVWNGmk2orgMs1mvrSc21n5LyIPsbj8Kd6HtTsbj8Jd/lj1qdRX9Ep+EV6z1fx9y8iC7G4/CXegPWnY3H4U70Pap1USyxwxmSV7WMG8uKh6WhciV0lrG8KfcvIhexuPwp3oe1OxuPwp3oe1ZlHjFLVSvjDtWQbMz7M4/5yKRVYUaeazFDLdbrqpbM5NP6LyILsbj8Kd6HtVJ0XgJuZ/9IetT6K/olPwivWer+PuXkQHYvB8N/pD1q7Ho3StPbSynmFh9ymkR6LT8JD6S1T6/2MKnwqhgN2QNLu+/tvpWU94YLDf3u8rFbWw0jAZXhtzYKlj2yND2ODmncQb3TI7EfZiKl+rYlOxtrtZ9JublERSQQhqcWebMLWX/AGcv3rEloa+V2aUF7u+6QH71Jg2IKyRtF1jlp1P3pP8Ak60dbKr3IRX7ELBSYhTvzwXjd32vG1SEVbjDLB8cMnO6wPzFZSKYUKHuyYu3WO334Rf7fkoGI4hy0UXmlQ4jiPc0cQ8cl1WiZsy+J93kI26/+td/mYklZjLxZrIo/wCED7yVhTwYnUfn3OeO8ZBbo3KYRLlRte9J/wAj69Z+nvhCK/b8kD1tq/gx6QV6ngxOlP8A25czmDxbo3KYRVWkgnlNjZdJWyWJRTX0/JYirsWbx4IX+ex+lXOuOIeBR/5qrROUJLrPu8jI7K28uuPf5mNLW4u8WZFDHztsT85UdPSYjUOzT5pDyZnjYppEudCn70mOq1jq9yEV+35IHrbV/Bj0gsinjxWnFoXvaO9nBHQVLIqrSwi8psZLpKyaxKKa+n5MZlbjDeNFC/x2+4q8MRxHloovNJZVr45waNqcoSXWf9/YyuyEv+OPf5lJxHEbbKKIeORYk1fi0gIaI4/4APvur73l3MFSquEn1mMhOEd/6ce9/dkTJS1cry+QF7jyufco2KspQXscYwNps9Sys0tHVY/i0GE4c3NJI6xdbY229x5gP+blltprrW1l5Olp9TdfJV7Kx9CJkrJ3vLnzvzHfY2+hF6UwbR/DsIwumw+CnjeyBmXO9gLnneXHnJJPnRYHYzsrTxSxhHBmkOaHNNwRcFXYndyfMsCmE1LUS0FZG6KeF5a5jt7SDtCy12arFOKkjyuopdU3BmSiojfm2HeriaZXuPiL45waLuIA5yrEldSx75mnmbt+hQ5RjxZaNc5+6skphVI2trGxyvMcLWukleN7WNFz9CysAxDR3GpaqnqoI8MAyilc6dzpJCSRtv2t92wd/mUXgeLtirBUQR5xHseyQbHtIII84usmko9HKGtZXU8eITPicHw005Zq2vG0XcNpAP0bVkudk2nW9x0tKqK4yjeva+Zaq4HUtVNTvILopHMJHKQbKyq5pXzzSTSuzSSOLnHvkm5VC2LhvOW8Z3BERBAREJtvQARUOlA4u1WnOLt5RksosuOl/Z6VaJublEUF0sBEWJUVD3StpqRjpZ3uDWhjcxJPIBylUnOMFljaqZ2y2YipmkfK2kpGOkqJHBjWsFySdwHOV2nqdaHt0Yw0y1Qa7E6kAzuG0RjkY094cp5TzALB6nGgbcCY3FMWaH4q9vasvcU4O8c7jynzDlJ31ce652Syz1Gk0saIYXEIiJJrObdVbQs4jE7HcKiLq2Jo4RCwbZmDugOVwHSPEAtA0b0bg0gpy6mxnU1DNskD4bkc4ObaOdeiFzPTjQKoZWOx/RMmGsaS+Wmj2ZzyuZz99u4+PYbxlgTZXnejW/8ApxVfHI/yT/8ASuM6m8rj+Wxo25qcn/epPRjTSnxEikxMNpK5py9t2rZDusL7nX7krbFfLMvDkahTdS/C3W12KVch/s2sZ9IKm6HQDRykIcaN1Q8cs8jnA/3eL8ylFW2R7eK4i3JdQTtHOtJcJbg+KSQwsDKeT8pCGiwAPJ5js6FFLpWP0HXihMLi0TM7aJ5HFPe8R5fYuaVLZ6Wd8FRHq5WGzmnkXV09qnHHNHn9Zp3XY2uDPqKxrHd9fC9x5StGTHssyCQN6pMjRy38SsIoyTslx0p5BZWySd5REFkkgiL4TbaUEn1UucGNLnEADeSsWevij2R9u7m3dK2fRrqeYzpA5lTipfh1DvGdv5R4/dYd3jd0FZrdVCHDezfp+j7bXl7ka5RxV2N1rKDB6eSaV/7I3Dvk9yOcrsegugdJoywVVSW1WKOFjNbtYge5YPv3nmGxT+A4Dhuj9HwXC6ZsTDte/e+Q99x5VJrmWWyseWego00KY4igiIlGgIiIAIiIA1PTDQLC9Jg6e3BMQtYVMbeP/G3uvp51oE7tLtBvyeI03D8MYdkwJc0N/j3s8ThbvLta+EAggi4PIpTwUlWpHMMK02wXEA1r5+CSnuKjtR5nbvnWxMe17Q5jg5p2gg3BVzG+p7o5jDnSPouCzu3y0h1Zv3yOKTzkLUqjqVYrQPdJo9j5ZyhkmaI+dzL36FbaQh0vkbUovHcDp8XjBcdXUMFmSgfMe+Fr0mF9UrDnbGCtYP2HQvHz2crMmNaeUxtNo69/8NDK752usrxm4vKYmdO0sSW4hcSw2qwybVVceW/FeNrXeIrEU/PpBpVUxOhqNFJJWu3tfh85HQoJ+HaRzykw6OV8TTuaKOaw859a3w1kce0cuzo2afscClFlR6LaYT21eCzi/wC1kZ9ZwUjTdTfTCpA1opqa+/W1A2egCpesrREei7nxwQZIG82Vh9ZAzfICe83at7ouo9O8tdieNNtysghLj5nOP3LZcM6l+jNEWumgnrXjlqZSR6LbA+cFJlrn1Uaq+iF15HG4KiprpxT4bRy1Ex7iNhe7oC2zB+pjpBirmyYvMzD4DtyuIfIf7rTYec35l2aioqSghENDTQ08Q3MhjDG9AV9ZZ3znxZ0KdFTVwRrWjeg+B6PFstLTa6rb+s1HbvB5uRvmAWyoiSaksBERBIREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQB//2Q==)


