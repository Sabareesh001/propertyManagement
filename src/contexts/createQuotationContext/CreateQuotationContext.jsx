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

  const [amenities, setAmenities] = useState([
    {
      id: 1,
      name: "Amenities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      price: 20.0,
      isFree: true,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
    {
      id: 2,
      name: "Amenities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      price: 20.0,
      isFree: false,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
    {
      id: 3,
      name: "Amenities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      isFree: false,
      price: 20.0,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
    {
      id: 4,
      name: "Amenities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      isFree: false,
      price: 20.0,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
    {
      id: 5,
      name: "Amenities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      isFree: false,
      price: 20.0,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
    {
      id: 6,
      name: "Amenities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      isFree: false,
      price: 20.0,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
    {
      id: 7,
      name: "Amenities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      isFree: false,
      price: 20.0,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
    {
      id: 8,
      name: "Amenities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      isFree: false,
      price: 20.0,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
    {
      id: 9,
      name: "Amenities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      isFree: false,
      price: 20.0,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
  ]);

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

  const [units, setUnits] = useState([]);

  useEffect(() => {
    console.log(units);
  }, [units]);

  useEffect(() => {
    fetchPropertyUnits();
  }, []);

  const [utilities, setUtilities] = useState([
    {
      id: 1,
      isFree: true,
      name: "Utilities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      price: 20.0,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
    {
      id: 2,
      isFree: false,
      name: "Utilities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      price: 20.0,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
    {
      id: 3,
      isFree: false,
      name: "Utilities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      price: 20.0,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
    {
      id: 4,
      isFree: false,
      name: "Utilities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      price: 20.0,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
    {
      id: 5,
      isFree: false,
      name: "Utilities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      price: 20.0,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
    {
      id: 6,
      isFree: false,
      name: "Utilities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      price: 20.0,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
    {
      id: 7,
      isFree: false,
      name: "Utilities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      price: 20.0,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
    {
      id: 8,
      isFree: false,
      name: "Utilities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      price: 20.0,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
    {
      id: 9,
      isFree: false,
      name: "Utilities Name",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/383004961/CI/WW/XZ/1938594/frp-swimming-pools.jpeg",
      price: 20.0,
      start_date: "22 Feb",
      end_date: "12 Feb  23",
    },
  ]);

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
        unitImageList,
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
