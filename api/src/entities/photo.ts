import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import {Checking} from './checking'
import {Item} from './item'

@Entity('photo')
export class Photo {
    @PrimaryGeneratedColumn()
    public id: number

    @Column({
        type:'varchar',
        length: 10,
        nullable: true,
        unique: true,
        name: 'photo'
    })
    
    public photo: string

    @ManyToOne(()=>Checking, checking => checking.photo)
    public checking:Checking

    @ManyToOne(()=>Item, item => item.photo)
    public item:Item



}