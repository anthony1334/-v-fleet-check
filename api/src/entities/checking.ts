import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
/* import { CheckItemValue } from './check-item-value' */
import {CheckItemValue} from './check-item-value'


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

    @Column({
        type: 'geometry',
        nullable: true,
        spatialFeatureType: 'Point',
        srid: 4326
    })

    @OneToMany(() => CheckItemValue, checkItemValues => checkItemValues.checking)
    public checkItemValues: CheckItemValue[]

}
