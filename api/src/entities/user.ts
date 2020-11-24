import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    public id: string

}