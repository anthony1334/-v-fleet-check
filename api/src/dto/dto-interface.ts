export interface DtoInterface<T> {
    deserialize(datas: any): T;
}