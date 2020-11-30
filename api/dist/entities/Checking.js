"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checking = void 0;
const typeorm_1 = require("typeorm");
const check_item_value_1 = require("./check-item-value");
// import { Vehicle } from './vehicle'
let Checking = class Checking {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Checking.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'date',
        nullable: false,
    }),
    __metadata("design:type", Date
    /*   @Column({
          type: 'varchar',
          length: 10,
          nullable: false,
      })
      public time: Time */
    )
], Checking.prototype, "date", void 0);
__decorate([
    typeorm_1.Column('time', {
        nullable: false,
        name: 'elapsed_time'
    }),
    __metadata("design:type", Date)
], Checking.prototype, "elapsedTime", void 0);
__decorate([
    typeorm_1.Column('datetime', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
        name: 'created'
    }),
    __metadata("design:type", Date)
], Checking.prototype, "created", void 0);
__decorate([
    typeorm_1.Column({
        type: 'geometry',
        nullable: true,
        spatialFeatureType: 'Point',
        srid: 4326
    }),
    typeorm_1.OneToMany(() => check_item_value_1.CheckItemValue, checkItemValues => checkItemValues.checking),
    __metadata("design:type", Array)
], Checking.prototype, "checkItemValues", void 0);
Checking = __decorate([
    typeorm_1.Entity('checking')
], Checking);
exports.Checking = Checking;
//# sourceMappingURL=Checking.js.map