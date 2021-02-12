import { Entity, Column, PrimaryGeneratedColumn, OneToMany,ManyToOne } from 'typeorm'
import { CheckItemValue } from './check-item-value'
import { Photo } from './photo'
import { Vehicle } from './vehicle'

@Entity('checking')

export class Checking {
    @PrimaryGeneratedColumn()
    public id: number

    @Column({
        type: 'date',
        nullable: false,
    })
    public date: Date

   
    @Column('time', {
        nullable: true,
        name: 'elapsed_time'
    })
   public elapsedTime: Date;

    @Column('datetime', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        name: 'created'
    })
    public created: Date

  

    @OneToMany(() => CheckItemValue, checkItemValue => checkItemValue.checking)
    public checkItemValues: CheckItemValue[]

   @OneToMany(()=>Photo, photo=>photo.checking)
   public photo: Photo[]

   @ManyToOne (()=>Vehicle, vehicle => vehicle.checkings)
   public vehicle: Vehicle

}