

export default function ImageUpload (){

const HandleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, id: number) => ({
    const file = e.target.files?.[0];
    if (!file) return;
    
    const url = URL.createObjectURL(file)
    
    SetCells(prev => prev.map(cell => ))

})   

};