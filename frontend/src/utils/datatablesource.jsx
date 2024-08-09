import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import imageLiveUrl from '../utils/urlConverter/imageLiveUrl';
import QRCode from 'qrcode.react';
import { backendUrl, baseUrl } from './config';
import { useGridApiContext } from "@mui/x-data-grid";
import { Box } from "@mui/material";

const QRCodeCell = props => {
  const url = `https://gs1ksa.org/?gtin=${props.value}`;
  return <QRCode value={url} size={40} />;
};

function ImageEditInputCell(props) {
  const { id, field, fieldUpdated, value, mode } = props;
  const apiRef = useGridApiContext();

  const handleFileChange = (event) => {
    const file = event.target?.files?.[0];

    if (!file) {
      apiRef.current.setEditCellValue({
        id,
        field: fieldUpdated,
        value: false,
      });
      return;
    }

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const imageValue = reader.result;
        apiRef.current.setEditCellValue({
          id,
          field: fieldUpdated,
          value: true,
        });
        apiRef.current.setEditCellValue({
          id,
          field,
          value: { file, dataURL: imageValue, isUpdate: true },
        });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRef = (element) => {
    if (element) {
      const input = element.querySelector('input[type="file"]');
      input?.focus();
    }
  };

  if (mode === "edit") {
    return (
      <Box sx={{ display: "flex", alignItems: "center", pr: 2 }}>
        <input
          ref={handleRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </Box>
    );
  }

  console.log("Value");
  console.log(value);
}

const renderImageEditInputCell = (params) => {
  const { field, fieldUpdated } = params;
  return (
    <ImageEditInputCell {...params} mode="edit" fieldUpdated={fieldUpdated} />
  );
};

const GTINCell = params => {
  const style = {
    backgroundColor: 'rgb(21 128 61)',
    color: 'white',
    borderRadius: '30px',
    padding: '2px 5px',
  };
  return <div style={style}>{params.value}</div>;
};

export const InventorySuppliersDataColumn = [
  {
    field: 'id',
    headerName: 'ID',
    width: 180,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'NAME',
    width: 180,
    editable: true,
  },
  {
    field: 'date',
    headerName: 'DATE',
    width: 180,
    editable: true,
  },

  {
    field: 'complete_name',
    headerName: 'Complete Name',
    width: 180,
    editable: true,
  },
  {
    field: 'lang',
    headerName: 'Language',
    width: 180,
    editable: true,
  },
  {
    field: 'tz',
    headerName: 'Timezone',
    width: 180,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 180,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 180,
    editable: true,
  },
  {
    field: 'mobile',
    headerName: 'Mobile',
    width: 180,
    editable: true,
  },
  {
    field: 'is_company',
    headerName: 'Is Company',
    width: 180,
    editable: true,
  },
  {
    field: 'industry_id',
    headerName: 'Industry ID',
    width: 180,
    editable: true,
  },
  {
    field: 'company_type',
    headerName: 'Company Type',
    width: 180,
    editable: true,
  },
];

export const GtinColumn = [
  // {
  //   field: "product_id",
  //   headerName: "Product ID",
  //   width: 100,
  // },
  {
    field: "productnameenglish",
    headerName: 'Product Name English',
    width: 180,
  },
  {
    field: "productnamearabic",
    headerName: 'Product Name Arabic',
    width: 180,
  },
  {
    field: "BrandName",
    headerName: 'Brand Name English',
    width: 180,
  },
  {
    field: "BrandNameAr",
    headerName: 'Brand Name Arabic',
    width: 180,
  },
  {
    field: 'certificate',
    headerName: 'Certificate',
    width: 120,
    renderCell: (params) => {
      const productId = params.row.id; // Assuming id is the productId
      const onClickIcon = () => {
        // Call the API when icon is clicked
        window.open(`${baseUrl}/products/getGtinCertificate/${productId}?selectedLanguage=${selectedLanguage}`, "_blank");
      };

      return (
        <InsertDriveFileIcon
          style={{
            color: "black",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
          onClick={onClickIcon}
        />
      );
    },
  },
  {
    field: "qrcode",
    headerName: 'QRCode',
    renderCell: (params) => <QRCodeCell value={params.row.barcode} />,
    // width: 50, // Adjust this width as needed
  },
  {
    field: "barcode",
    headerName: 'Barcode',
    renderCell: GTINCell,
    width: 150,
  },
  {
    field: "front_image",
    headerName: 'Back Photo',
    width: 180,
    editable: true,
    renderCell: (params) => (
      <img
        src={imageLiveUrl(params.row.front_image)}
        // src={backendUrl + "/" + params.row.address_image}
        alt="address_image"
        style={{
          width: '90%',
          height: '90%',
          objectFit: 'contain',
          cursor: 'pointer'
        }}
        onClick={() => {
          window.open(imageLiveUrl(params.row.front_image), '_blank', 'width=400,height=300,top=0,left=0');
        }}
      />
    )
  },
  {
    field: "back_image",
    headerName: 'Back Photo',
    width: 180,
    editable: true,
    renderCell: (params) => (
      <img
        src={imageLiveUrl(params.row.back_image)}
        // src={backendUrl + "/" + params.row.address_image}
        alt="address_image"
        style={{
          width: '90%',
          height: '90%',
          objectFit: 'contain',
          cursor: 'pointer'
        }}
        onClick={() => {
          window.open(imageLiveUrl(params.row.back_image), '_blank', 'width=400,height=300,top=0,left=0');
        }}
      />
    )
  },
  {
    field: "image_1",
    headerName: 'Optional Image 1',
    width: 180,
    editable: true,
    renderCell: (params) => (
      <img
        src={imageLiveUrl(params.row.image_1)}
        // src={backendUrl + "/" + params.row.address_image}
        alt="address_image"
        style={{
          width: '90%',
          height: '90%',
          objectFit: 'contain',
          cursor: 'pointer'
        }}
        onClick={() => {
          window.open(imageLiveUrl(params.row.image_1), '_blank', 'width=400,height=300,top=0,left=0');
        }}
      />
    )
  },
  {
    field: "image_2",
    headerName: 'Optional Image 2',
    width: 180,
    editable: true,
    renderCell: (params) => (
      <img
        src={imageLiveUrl(params.row.image_2)}
        // src={backendUrl + "/" + params.row.address_image}
        alt="address_image"
        style={{
          width: '90%',
          height: '90%',
          objectFit: 'contain',
          cursor: 'pointer'
        }}
        onClick={() => {
          window.open(imageLiveUrl(params.row.image_2), '_blank', 'width=400,height=300,top=0,left=0');
        }}
      />
    )
  },
  {
    field: "image_3",
    headerName: 'Optional Image 3',
    width: 180,
    editable: true,
    renderCell: (params) => (
      <img
        src={imageLiveUrl(params.row.image_3)}
        // src={backendUrl + "/" + params.row.address_image}
        alt="address_image"
        style={{
          width: '90%',
          height: '90%',
          objectFit: 'contain',
          cursor: 'pointer'
        }}
        onClick={() => {
          window.open(imageLiveUrl(params.row.image_3), '_blank', 'width=400,height=300,top=0,left=0');
        }}
      />
    )
  },
  // {
  //   field: "product_url",
  //   headerName: "Product URL",
  //   width: 180,
  //   renderCell: (params) => {
  //     let url = params.value;
  //     if (!url.startsWith('http://') && !url.startsWith('https://')) {
  //       url = 'http://' + url;
  //     }
  //     return (
  //       <a href={url} target="_blank" rel="noopener noreferrer">
  //         {params.value}
  //       </a>
  //     );
  //   },
  // },
  {
    field: "product_url",
    headerName: 'Product URL',
    width: 180,
    renderCell: (params) => {
      let url = params.value;
      if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
      }
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {params.value}
        </a>
      );
    },
  },

  {
    field: 'ProductType',
    headerName: 'Product Type',
    width: 180,
  },
  {
    field: 'Origin',
    headerName: 'Origin',
    width: 180,
  },
  {
    field: 'PackagingType',
    headerName: 'Packaging Type',
    width: 180,
  },
  {
    field: 'unit',
    headerName: 'Unit',
    width: 180,
  },
  {
    field: 'size',
    headerName: 'Size',
    width: 180,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 120,
  // },
];

export const GlnColumn = (t, i18n) => {
  const columns = [
    {
      field: 'product_id',
      headerName: t('Product ID'),
      width: 180,
    },
    {
      field: 'gcpGLNID',
      headerName: t('GCP GLN ID'),
      width: 180,
    },
    {
      field: 'locationNameEn',
      headerName: t('LOCATION NAME EN'),
      width: 180,
    },
    {
      field: 'locationNameAr',
      headerName: t('LOCATION NAME AR'),
      width: 150,
    },

    {
      field: 'GLNBarcodeNumber',
      headerName: t('GLN Barcode Number'),
      width: 180,
    },
    // {
    //   field: 'status',
    //   headerName: t('Status'),
    //   width: 180,
    // },
    {
      field: 'status',
      headerName: t('Status'),
      width: 180,
      renderCell: params => (
        <div
          style={{
            padding: '5px',
            paddingLeft: '5px',
            paddingRight: '5px',
            borderRadius: '10px',
            border: '2px solid',
            borderColor: params.row.status === 'active' ? 'green' : 'red',
            color: params.row.status === 'active' ? 'green' : 'red',
          }}
        >
          {params.row.status}
        </div>
      )
    },
  ];

  if (i18n && i18n.language === 'ar') {
    columns.reverse();
  }
  return columns;
};

export const ViewSsccColumn = (t, i18n) => {
  const columns = [
    {
      field: 'sscc_id',
      headerName: t('SSCC ID'),
      width: 180,
    },
    {
      field: 'sscc_type',
      headerName: t('Type'),
      width: 180,
    },
    {
      field: 'SSCCBarcodeNumber',
      headerName: t('SSCC Barcode Number'),
      width: 280,
    },
  ];

  if (i18n && i18n.language === 'ar') {
    columns.reverse();
  }
  return columns;
};


export const memberActivityReportColumn = (t, i18n) => [
  {
    field: 'subject',
    headerName: t('Subject'),
    width: 380,
  },
  {
    field: 'company_name_eng',
    headerName: t('Company Name English'),
    width: 180,
  },
  {
    field: 'company_name_arabic',
    headerName: t('Company Name Arabic'),
    width: 180,
  },
  {
    field: 'other_products',
    headerName: t('Other Products'),
    width: 180,
  },
  {
    field: 'memberID',
    headerName: t('Member ID'),
    width: 180,
  },
  {
    field: 'email',
    headerName: t('Email'),
    width: 180,
  },
  {
    field: 'mobile',
    headerName: t('Mobile'),
    width: 180,
  },
  {
    field: 'companyID',
    headerName: t('Company ID'),
    width: 180,
  },
  {
    field: 'contactPerson',
    headerName: t('Contact Person'),
    width: 180,
  },
  {
    field: 'status',
    headerName: t('Status'),
    width: 180,
    renderCell: params => (
      <div
        style={{
          padding: '5px',
          paddingLeft: '5px',
          paddingRight: '5px',
          borderRadius: '10px',
          border: '2px solid',
          borderColor: params.row.status === 'active' ? 'green' : 'red',
          color: params.row.status === 'active' ? 'green' : 'red',
        }}
      >
        {params.row.status}
      </div>
    ),
  },
  {
    field: 'transaction_id',
    headerName: t('Transaction ID'),
    width: 180,
  },
  {
    field: 'membership_category',
    headerName: t('Membership Category'),
    width: 180,
  },
  {
    field: 'city',
    headerName: t('City'),
    width: 180,
  },
  {
    field: 'state',
    headerName: t('State'),
    width: 180,
  },
  {
    field: 'country',
    headerName: t('Country'),
    width: 180,
  },
  {
    field: 'created_at',
    headerName: t('Created At'),
    width: 180,

    type: 'dateTime',
    valueGetter: (params) => {
      // Convert the string date to a Date object
      return params.value ? new Date(params.value) : null;
    }
  },
  {
    field: 'updated_at',
    headerName: t('Updated At'),
    width: 180,
    type: 'dateTime',
    valueGetter: (params) => {
      // Convert the string date to a Date object
      return params.value ? new Date(params.value) : null;
    }
  },



];



export const gtinReportsColumns = (t, i18n) => [
  {
    field: 'reporter_email',
    headerName: t("Reporter"),
    width: 180,
  },
  {
    field: 'report_barcode',
    headerName: t("Barcode"),
    width: 180,
  },
  {
    field: 'report_comment',
    headerName: t("Comment"),
    width: 180,
  },
  {
    field: 'report_status',
    headerName: t('Status'),
    width: 120,
    renderCell: params => (
      <div
        style={{
          padding: '5px',
          paddingLeft: '10px',
          paddingRight: '10px',
          borderRadius: '20px',
          border: '2px solid',
          borderColor: params.row.report_status === 1 ? 'green' : 'red',
          color: params.row.report_status === 1 ? 'green' : 'red',
        }}
      >
        {params.row.report_status === 1 ? 'completed' : 'pending'}
      </div>
    ),
  },
  {
    field: "created_at",
    headerName: t("Date"),
    width: 180,
    type: "dateTime",
    valueGetter: (params) => {
      // Convert the string date to a Date object
      return params.value ? new Date(params.value) : null;
    },
  },
  {
    field: 'report_action',
    headerName: t("Reporter Action"),
    width: 180,
  },
  {
    field: "report_images",
    headerName: t("Report Image"),
    width: 180,
    editable: true,
    renderCell: (params) => (
      <img
        src={imageLiveUrl(params.row.report_images)}
        // src={backendUrl + "/" + params.row.address_image}
        alt="address_image"
        style={{
          width: '90%',
          height: '90%',
          objectFit: 'contain',
          cursor: 'pointer'
        }}
        onClick={() => {
          window.open(imageLiveUrl(params.row.report_images), '_blank', 'width=400,height=300,top=0,left=0');
        }}
      />
    )
  },


];


