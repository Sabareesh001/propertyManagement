import { CreateOuotationContextProvider } from "../contexts/createQuotationContext/CreateQuotationContext";
import CreateQuotation from "../pages/createQuotation/CreateQuotation";

const privateRoutes = [
   {
    path:'/createQuotation',
    element:<CreateOuotationContextProvider component={<CreateQuotation/>}/>
   }
]

export default privateRoutes;