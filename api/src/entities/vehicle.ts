import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

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

}