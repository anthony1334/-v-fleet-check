import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import {Checking} from './checking'
import {Item} from './item'

@Entity('photo')
export class Photo {
    @PrimaryGeneratedColumn()
    public id: number

    @Column({
        type:'varchar',
        length: 255,
        nullable: true,
        unique: true,
        name: 'photo'
    })
    
    public photo: string

    @ManyToOne(()=>Checking, checking => checking.photo,{ nullable: true })
    public checking:Checking

    @ManyToOne(()=>Item, item => item.photos)
    public item:Item



}