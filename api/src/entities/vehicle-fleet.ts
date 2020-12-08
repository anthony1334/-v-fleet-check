import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import { Company } from './company'
import { Vehicle } from './vehicle'

@Entity('vehicle-fleet')
export class VehicleFleet {
    
    @PrimaryGeneratedColumn()
    public id: number

    @ManyToOne (()=>Company)
    public CompanyId: Company

    @OneToMany (()=>Vehicle, VehiculeId=>VehiculeId.id)
    public VehicleId: Vehicle    

    public name: string
}