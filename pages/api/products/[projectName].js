import { productData } from '../../../data';

export default function handler({query:{ projectName }},res){
    const filtered = productData.filter(product => product.projectName === projectName);

    if(filtered.length > 0){
        res.status(200).json(filtered[0])
    }else{
        res.status(404).json({message: 'Not found'})
    }
}