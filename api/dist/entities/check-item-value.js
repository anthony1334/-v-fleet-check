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
exports.CheckItemValue = void 0;
const typeorm_1 = require("typeorm");
const item_1 = require("./item");
const Checking_1 = require("./Checking");
let CheckItemValue = class CheckItemValue {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CheckItemValue.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], CheckItemValue.prototype, "value", void 0);
__decorate([
    typeorm_1.ManyToOne(() => item_1.Item, item => item.itemValues),
    __metadata("design:type", item_1.Item)
], CheckItemValue.prototype, "item", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Checking_1.Checking),
    __metadata("design:type", Checking_1.Checking)
], CheckItemValue.prototype, "checking", void 0);
CheckItemValue = __decorate([
    typeorm_1.Entity('check-item-value')
], CheckItemValue);
exports.CheckItemValue = CheckItemValue;
//# sourceMappingURL=check-item-value.js.map