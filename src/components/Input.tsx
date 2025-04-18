

export function Input({reference,placeholder}:{reference?: any,placeholder:string}){
    return <div>
        <input ref={reference} placeholder={placeholder} type="text" className="px-4 py-2 rounded border m-2" />
    </div>
}