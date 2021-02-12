import { DtoInterface } from './dto-interface';
export class UserDto implements DtoInterface<UserDto> {
    
    public id: number = 0
    public userLog: string = ''
    public company: {id: number, name: string} = null

    deserialize(datas: any): UserDto {
        for (const property in datas) {
            if (this.hasOwnProperty(property)) {
                this[property] = datas[property]
            }
        }
        return this
    }

}