import { createContext, useEffect, useState } from "react";
import House from "../../assets/house.jpg";
import House2 from "../../assets/house2.png";
import ManImage from "../../assets/man.jpg";
const CreateQuotationContext = createContext(null);

const CreateOuotationContextProvider = ({ component }) => {
  const [leadDetails, setLeadDetails] = useState({
    name: "Tom Cruise",
    mobile: "+91 9090808012",
    email: "Tomcruise2515@mail.com",
    image: ManImage,
    isProspect: true,
  });

  const [currentUnit, setCurrentUnit] = useState(null);

  const [quotationDetails, setQuotationDetails] = useState({
    lease_start_date: "22 Feb",
    lease_end_date: "22 Jan",
    rent_start_date: "22 Feb",
    grace_period: 90,
  });

  const [quotationSummary, setQuotationSummary] = useState({
    total_amount: 0.0,
    total_discount: 0.0,
    total_refundable: 0.0,
    total_tax: 0.0,
  });

  const [unitImageList, setUnitImageList] = useState([
    {
      image: House2,
    },
    {
      image: House2,
    },
    {
      image: House2,
    },
    {
      image: House2,
    },
    {
      image: House2,
    },
    {
      image: House2,
    },
    {
      image: House2,
    },
  ]);
  const [units, setUnits] = useState([
    {
      image: House,
      name: "Jumeriah Estate",
      unitId: "UNT-1234",
      address: "Rubix Apartment, K Tower, Floor 1",
      company: "Jumeriah Golf Estate",
      beds: 2,
      baths: 2,
      bhk: 2,
      area: 2000,
      isDiscountApplied: true,
      primary_pricing: {
        revenue_type: 1,
        pricing_component: 1,
        tax_group_for_pricing: 1,
        component_based_on: 1,
        uom_value: 200,
        max: 150,
        recommended: 130,
        min: 100,
        discount:10.00
      },
      secondary_pricing: {
        revenue_type: 1,
        pricing_component: 1,
        tax_group_for_pricing: 1,
        component_based_on: 1,
        uom_value: 200,
        discount:0.00
      },
      otcp_pricing: {
        revenue_type: 1,
        pricing_component: 1,
        tax_group_for_pricing: 1,
        component_based_on: 1,
        uom_value: 200,
        discount:0.00

      },
      refundables_pricing: {
        revenue_type: 1,
        pricing_component: 1,
        tax_group_for_pricing: 1,
        component_based_on: 1,
        uom_value: 200,
        discount:0.00

      },
      inventory_pricing: {
        revenue_type: 1,
        pricing_component: 1,
        tax_group_for_pricing: 1,
        pricing_based_on: 1,
        item_unit_price: 200,
        quantity: 10,
        discount:0.00

      },
      parking_pricing: {
        revenue_type: 1,
        pricing_component: 1,
        tax_group_for_pricing: 1,
        changable: 1,
        component_based_on: 1,
        uom_value: 200,
        discount:0.00

      },
    },
    {
      image: House,
      name: "Jumeriah Estate",
      unitId: "UNT-1234",
      address: "Rubix Apartment, K Tower, Floor 1",
      company: "Jumeriah Golf Estate",
      beds: 2,
      baths: 2,
      bhk: 2,
      area: 2000,
      price: 1230,
      isDiscountApplied: false,
    },
    {
      image: House,
      name: "Jumeriah Estate",
      unitId: "UNT-1234",
      address: "Rubix Apartment, K Tower, Floor 1",
      company: "Jumeriah Golf Estate",
      beds: 2,
      baths: 2,
      bhk: 2,
      area: 2000,
      price: 1200,
      isDiscountApplied: false,
    },
  ]);

  useEffect(()=>{
      console.log(quotationSummary)
  },[quotationSummary])

  useEffect(() => {
    console.log(units)
    let total = 0.0;
    let total_discount = 0.0;
    let total_refundables = 0.0;
    units.forEach((unitDetails) => {
        total += 
        (unitDetails?.primary_pricing?.uom_value || 0.0) +
        (unitDetails?.secondary_pricing?.uom_value || 0.0) +
        (unitDetails?.otcp_pricing?.uom_value || 0.0) +
        ((unitDetails?.inventory_pricing?.item_unit_price || 0.0) * (unitDetails?.inventory_pricing?.quantity || 0)) +
        (unitDetails?.parking_pricing?.uom_value || 0.0);
       total_refundables+=(unitDetails?.refundables_pricing?.uom_value || 0.0);
      // Calculate total_discount based on discount object (assuming discount percentages)
      total_discount += 
      (unitDetails?.primary_pricing?.uom_value || 0.0) * ((unitDetails?.primary_pricing?.discount || 0) / 100) +
      (unitDetails?.secondary_pricing?.uom_value || 0.0) * ((unitDetails?.secondary_pricing?.discount || 0) / 100) +
      (unitDetails?.otcp_pricing?.uom_value || 0.0) * ((unitDetails?.otcp_pricing?.discount || 0) / 100) +
      (unitDetails?.refundables_pricing?.uom_value || 0.0) * ((unitDetails?.refundables_pricing?.discount || 0) / 100) +
      ((unitDetails?.inventory_pricing?.item_unit_price || 0.0) * (unitDetails?.inventory_pricing?.quantity || 0)) * ((unitDetails?.inventory_pricing?.discount || 0) / 100) +
      (unitDetails?.parking_pricing?.uom_value || 0.0) * ((unitDetails?.parking_pricing?.discount || 0) / 100);
    
    });



    setQuotationSummary((prev)=>{
        const newPrev = {...prev};
        newPrev.total_amount = total;
        newPrev.total_discount = total_discount;
        newPrev.total_refundable = total_refundables;
        return(newPrev);
    })
  }, [units]);

  return (
    <CreateQuotationContext.Provider
      value={{
        leadDetails,
        setLeadDetails,
        quotationDetails,
        setQuotationDetails,
        units,
        setUnits,
        unitImageList,
        currentUnit,
        setCurrentUnit,
        quotationSummary
      }}
    >
      {component}
    </CreateQuotationContext.Provider>
  );
};

export { CreateOuotationContextProvider, CreateQuotationContext };
