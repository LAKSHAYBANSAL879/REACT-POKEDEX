function Pokemon({name,image}){
return (
    <div className="flex flex-col   basis-1/5  items-center  hover:bg-amber-100">
<div className=" text-2xl text-pink-600 font-extrabold">{name}</div>
<div className=" mt-4 w-48  h-fit p-5"><img src={image}/></div>
    </div>
)
}
export default Pokemon;