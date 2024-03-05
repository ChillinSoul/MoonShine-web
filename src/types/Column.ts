export interface Column {
    title : string;
    dataIndex : string;
    key : string;
    color? : string;
    items? : any[];
    render? : (text : any, record : any) => JSX.Element;
}