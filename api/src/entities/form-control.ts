import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('form-control')

export class FormControl {
    
    @PrimaryGeneratedColumn()
    public id: number

    @Column({
        type:'varchar',
        length: 75,
        nullable: false,
        unique: true
    })
    public uiType: string
    

}