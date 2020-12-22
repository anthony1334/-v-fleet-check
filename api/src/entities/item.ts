import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import { CheckItemValue } from './check-item-value'
import { FormControl } from './form-control'
import {Photo} from './photo'
// type de controle
@Entity('item')

export class Item {

    @PrimaryGeneratedColumn()
    public id: number

    @Column({
        type:'varchar',
        length: 150,
        nullable: false,
        unique: true
    })
    public label: string

    @Column({
        type: 'varchar',
        length:255,
        nullable: false,
    })
    public hinting: string

    @ManyToOne(()=>FormControl,{eager:true})
    public uiType: FormControl

    @OneToMany(()=>CheckItemValue,itemValues=>itemValues.item,{eager:true})
    public itemValues:CheckItemValue[]

    @OneToMany(()=>Photo,photo=>photo.item,{eager:true})
    public photo:Photo[]

}