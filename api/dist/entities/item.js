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
exports.Item = void 0;
const typeorm_1 = require("typeorm");
const check_item_value_1 = require("./check-item-value");
const form_control_1 = require("./form-control");
// type de controle
let Item = class Item {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Item.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 150,
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], Item.prototype, "label", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], Item.prototype, "hinting", void 0);
__decorate([
    typeorm_1.ManyToOne(() => form_control_1.FormControl),
    __metadata("design:type", form_control_1.FormControl)
], Item.prototype, "uiType", void 0);
__decorate([
    typeorm_1.OneToMany(() => check_item_value_1.CheckItemValue, itemValues => itemValues.item),
    __metadata("design:type", Array)
], Item.prototype, "itemValues", void 0);
Item = __decorate([
    typeorm_1.Entity('item')
], Item);
exports.Item = Item;
//# sourceMappingURL=item.js.map