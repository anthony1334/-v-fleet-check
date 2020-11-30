import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Item } from './item'

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