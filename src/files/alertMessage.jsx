export default function AlertMessage({text}){
    return <div className="alert alert-warning py-3 text-center" role="alert">
      {text}
    </div>;
}