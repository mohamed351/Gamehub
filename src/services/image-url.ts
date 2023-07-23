const getCroppedImage=(image:string)=>{ 
 if(image == null){
    return ""
}
const target = "/media/"
let indexOf = image.indexOf(target);
const partOne = image.substring(0,indexOf);
const partTwo =  image.substring(indexOf + target.length,image.length);
return `${partOne}/media/crop/600/400/${partTwo}`;
}
export default getCroppedImage;
