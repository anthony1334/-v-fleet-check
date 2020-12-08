import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm'
import {Item} from'./item'
import {Checking} from'./Checking'

@Entity('check-item-value')

export class CheckItemValue   {
    @PrimaryGeneratedColumn()
    public id: number
   

    @Column({
        type:'varchar',
        length: 255,
        nullable: false,
    })
    public value: string

    @ManyToOne(()=>Item,item=>item.itemValues)
    public item:Item

    @ManyToOne(()=>Checking)
    public checking:Checking

}