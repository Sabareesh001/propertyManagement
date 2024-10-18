import { createContext, useEffect, useState } from "react";
import House from "../../assets/house.jpg";
import House2 from "../../assets/house2.png";
import ManImage from "../../assets/man.jpg";
import axios from "axios";
import { apiHost } from "../../config/config";
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
    lease_start_date: new Date().toDateString(),
    lease_end_date: new Date().toDateString(),
    rent_start_date: new Date().toDateString(),
    grace_period: 90,
  });

  const [quotationSummary, setQuotationSummary] = useState({
    total_amount: 0.0,
    total_discount: 0.0,
    total_refundable: 0.0,
    total_tax: 0.0,
  });

  const [amenities, setAmenities] = useState([]);


  const fetchPropertyUnits = () => {
    axios
      .get(`${apiHost}/api/property-units`)
      .then((response) => {
        const data = response.data;
        if (data) {
          setUnits(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching property units:", error);
      });
  };

  const fetchAmenities = (property_unit_id) => {
    axios
      .get(`${apiHost}/api/amenities-by-property-id`, {
        params: {
          property_unit_id: property_unit_id,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setAmenities(res.data);
        }
      });
  };

  const fetchUtilities = (property_unit_id) => {
    axios
      .get(`${apiHost}/api/utilities-by-property-id`, {
        params: {
          property_unit_id: property_unit_id,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          setUtilities(res.data);
        }
      });
  };

  const filterUnitData = ()=>{
    let newUnit = [...units];
    newUnit = newUnit.map((data)=>{

      return(
        {
          id:data.id,
          primary_pricing: data.primary_pricing,
          secondary_pricing :  data.secondary_pricing,
          one_time_cost_pricing: data.one_time_cost_pricing,
          refundables_pricing : data.refundables_pricing,
          inventory_pricing : data.inventory_pricing,
          parking_pricing : data.parking_pricing,
          amenities:data.amenities,
          utilities:data.utilities
         
        }
      )
    })
    console.log({unitsData:newUnit, quotation_details:quotationDetails});
  }

  const [units, setUnits] = useState([]);

  useEffect(() => {
    console.log(units);
    filterUnitData();
  }, [units]);

  useEffect(() => {
    fetchPropertyUnits();
  }, []);

  const [utilities, setUtilities] = useState([]);

  useEffect(() => {
    console.log(quotationSummary);
  }, [quotationSummary]);

  useEffect(() => {
    console.log(units);
    let total = 0.0;
    let total_discount = 0.0;
    let total_refundables = 0.0;
    units.forEach((unitDetails) => {
      total +=
        (unitDetails?.primary_pricing?.uom_value || 0.0) +
        (unitDetails?.secondary_pricing?.uom_value || 0.0) +
        (unitDetails?.one_time_cost_pricing?.uom_value || 0.0) +
        (unitDetails?.inventory_pricing?.item_unit_price || 0.0) *
          (unitDetails?.inventory_pricing?.quantity || 0) +
        (unitDetails?.parking_pricing?.uom_value || 0.0);

      unitDetails?.amenities?.forEach((data) => {
        total += data?.amount || 0.0;
      });
      unitDetails?.utilities?.forEach((data) => {
        total += data?.amount || 0.0;
      });
      total_refundables += unitDetails?.refundables_pricing?.uom_value || 0.0;

      total_discount +=
        (unitDetails?.primary_pricing?.uom_value || 0.0) *
          ((unitDetails?.primary_pricing?.discount || 0) / 100) +
        (unitDetails?.secondary_pricing?.uom_value || 0.0) *
          ((unitDetails?.secondary_pricing?.discount || 0) / 100) +
        (unitDetails?.one_time_cost_pricing?.uom_value || 0.0) *
          ((unitDetails?.one_time_cost_pricing?.discount || 0) / 100) +
        (unitDetails?.refundables_pricing?.uom_value || 0.0) *
          ((unitDetails?.refundables_pricing?.discount || 0) / 100) +
        (unitDetails?.inventory_pricing?.item_unit_price || 0.0) *
          (unitDetails?.inventory_pricing?.quantity || 0) *
          ((unitDetails?.inventory_pricing?.discount || 0) / 100) +
        (unitDetails?.parking_pricing?.uom_value || 0.0) *
          ((unitDetails?.parking_pricing?.discount || 0) / 100);
    });

    setQuotationSummary((prev) => {
      const newPrev = { ...prev };
      newPrev.total_amount = total;
      newPrev.total_discount = total_discount;
      newPrev.total_refundable = total_refundables;
      return newPrev;
    });
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
        currentUnit,
        setCurrentUnit,
        quotationSummary,
        amenities,
        setAmenities,
        utilities,
        setUtilities,
        fetchAmenities,
        fetchUtilities
      }}
    >
      {component}
    </CreateQuotationContext.Provider>
  );
};

export { CreateOuotationContextProvider, CreateQuotationContext };
