import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from 'typeorm'
import {Item} from'./item'
<<<<<<< HEAD
import {Checking} from'./Checking'

@Entity('check-item-value')

=======
import {Checking} from'./checking'

@Entity('check-item-value')
>>>>>>> entityRepository
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

<<<<<<< HEAD
    @ManyToOne(()=>Checking)
=======
    @ManyToOne(()=>Checking,checking=>checking.checkItemValues)
>>>>>>> entityRepository
    public checking:Checking

}