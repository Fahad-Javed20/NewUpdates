interface NewUpdateProps{
    image:string;
    title1:string;
    title2:string;
    discription:string;
    end_line:string;

}


const NewUpdateCard = ({image,title1,title2,discription,end_line}:NewUpdateProps) => {
  return (
    <div className="bg-white shadow-lg/3 h-120 w-90 rounded-lg flex flex-col items-starts ">
      <div className="w-full h-2/6">
        <img
          className="rounded-2xl px-3 py-3 w-full h-52"
          src={image}
          alt="People Partying"
        />
      </div >

      <div className="gap-1 flex flex-col items-start w-full h-4/6 mt-12">
        <p className="text-3xl font-semibold pl-3">{title1}</p>
        <p className="text-3xl font-semibold pl-3">{title2}</p>
        <p id="discription" className="pl-3 self-start">{discription}</p>
      </div>

      <div className="h-1/6 pl-5 font-semibold text-purple-800 self-start ">{end_line}</div>
    </div>
  );
};

export default NewUpdateCard;
