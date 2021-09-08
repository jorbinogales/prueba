import { Controller, Inject } from "@nestjs/common";
import { ClientProxy, MessagePattern } from "@nestjs/microservices";


@Controller()
export class AppController{
    @MessagePattern({ cmd: 'hello' })
    hola(values: any) {
        console.log(values);
        console.log('hello microservice');
    }
}