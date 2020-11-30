import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm'
import {Item} from'./item'
import {Checking} from'./checking'

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

    @ManyToOne(()=>Checking,checking=>checking.checkItemValues)
    public checking:Checking

}