import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { FormattedMessage } from "react-intl";


const FormattedText = ({id, display='EN|DE'}:{id:string, display?:string}) => {

  const usersLocale = useSelector((state:RootState)=>state.language.language.usersLocale)

  const textDiv = ( display.includes(usersLocale) ? <FormattedMessage id={id}/> : <></>)
  return (
    <>
        {textDiv}
    </>
  );
};

export default FormattedText;