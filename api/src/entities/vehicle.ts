import { Entity, Column, PrimaryGeneratedColumn,ManyToOne, OneToMany } from 'typeorm'
import { Company } from './company'

@Entity('vehicle')
export class Vehicle {
    @PrimaryGeneratedColumn()
    public id: number

    @Column({
        type:'varchar',
        length: 10,
        nullable: false,
        unique: true
    })
    public matriculation: string

    @Column({
        type: 'date',
        nullable: false,
        name: 'putting_circulation_date'
    })
    public puttingCirculationDate: Date

    @ManyToOne (()=>Company)
    public company: Company

}