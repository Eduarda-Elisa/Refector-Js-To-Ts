export class item {
    name: string;
    quantity: number;
    limit: number;

    constructor(name : string, quantity : number, limit : number){
        this.name = name;
        this.quantity = this.quantityIsLimit(quantity, limit);
        this.limit = limit;
    }

    private quantityIsLimit(quantity : number, limit : number){
        if( quantity >= limit){
            return quantity
        }
        
        throw new Error("Quantidade é menor do que o limite do estoque!")      
        
    }

    public quantityIsLow(): boolean{
        if(this.quantity < this.limit){
            return true;
        }

        return false;
    }

    public getName(){
        return this.name
    }

    public getQuantity(){
        return this.quantity
    }

    public getLimit(){
        return this.limit
    }

    public setQuantity(quantity : number){
        this.quantity= quantity
    }

    

}