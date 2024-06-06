import { Select, setOptions } from '@mobiscroll/react';
import { useCallback, useMemo, useState } from 'react';
import React from 'react';
import { GB, AT, BE, CY, CZ, DK, FI, FR, DE, GR, IL, LU, MT, NO, PL, ES, SE, CH } from 'country-flag-icons/react/3x2';
import * as CountryFlags from 'country-flag-icons/react/3x2';
import './country-filter.css';
import { Box} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import '../../../../pages/home.css';
import HtmlTooltip from './HtmlTooltip';

setOptions({
  theme: 'ios',
  themeVariant: 'light'
});

function QucikSearchFilterNew() {
  const [myValue, setValue] = useState([]);

  const myData = useMemo(
    () => [
      {
        text: '英国',
        value: '1',
        avatar: CountryFlags.GB,
      },
      {
        text: '奥地利',
        value: '2',
        avatar: CountryFlags.AT,
      },
      {
        text: '比利时',
        value: '3',
        avatar: BE,
      },
      {
        text: '塞浦路斯',
        value: '4',
        avatar: CY,
      },
      {
        text: '捷克共和国',
        value: '5',
        avatar: CZ,
      },
      {
        text: '丹麦',
        value: '6',
        avatar: DK,
      },
      {
        text: '芬兰',
        value: '7',
        avatar: FI,
      },
      {
        text: '法国',
        value: '8',
        avatar: FR,
      },
      {
        text: '德国',
        value: '9',
        avatar: DE,
      },
      {
        text: '希腊',
        value: '10',
        avatar: GR,
      },
      {
        text: '以色列',
        value: '11',
        avatar: IL,
      },
      {
        text: '卢森堡',
        value: '12',
        avatar: LU,
      },
      {
        text: '马耳他',
        value: '13',
        avatar: MT,
      },
      {
        text: '挪威',
        value: '14',
        avatar: NO,
      },
      {
        text: '波兰',
        value: '15',
        avatar: PL,
      },
      {
        text: '西班牙',
        value: '16',
        avatar: ES,
      },
      {
        text: '瑞典',
        value: '17',
        avatar: SE,
      },
      {
        text: '瑞士',
        value: '18',
        avatar: CH,
      },
    ],
    [],
  );

  // const renderCustomItem = useCallback(
  //   (item) => {
  //     console.log('Rendering item:', item); 
  //     const AvatarComponent = item.avatar;
  //   return (
  //     <div className="md-image-text-item">
  //       {AvatarComponent ? <AvatarComponent className="country-flag" /> : null}
  //       <div className="md-image-text-name">{item.text}</div>
  //     </div>
  //   );
  // },
  //   [],
  // );

  const renderCustomItem = (item) => {
    switch (item.value) {
      case '1':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.GB className="country-flag" />
            <div>英国</div>
          </Box>
        );
      case '2':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.AT className="country-flag" />
            <div>奥地利</div>
          </Box>
        );
      case '3':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.BE className="country-flag" />
            <div>比利时</div>
          </Box>
        );
      case '4':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.CY className="country-flag" />
            <div>塞浦路斯</div>
          </Box>
        );
      case '5':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.CZ className="country-flag" />
            <div>捷克共和国</div>
          </Box>
        );
      case '6':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.DK className="country-flag" />
            <div>丹麦</div>
          </Box>
        );
      case '7':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.FI className="country-flag" />
            <div>芬兰</div>
          </Box>
        );
      case '8':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.FR className="country-flag" />
            <div>法国</div>
          </Box>
        );
      case '9':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.DE className="country-flag" />
            <div>德国</div>
          </Box>
        );
      case '10':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.GR className="country-flag" />
            <div>希腊</div>
          </Box>
        );
      case '11':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.IL className="country-flag" />
            <div>以色列</div>
          </Box>
        );
      case '12':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.LU className="country-flag" />
            <div>卢森堡</div>
          </Box>
        );
      case '13':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.MT className="country-flag" />
            <div>马耳他</div>
          </Box>
        );
      case '14':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.NO className="country-flag" />
            <div>挪威</div>
          </Box>
        );
      case '15':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.PL className="country-flag" />
            <div>波兰</div>
          </Box>
        );
      case '16':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.ES className="country-flag" />
            <div>西班牙</div>
          </Box>
        );
      case '17':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.SE className="country-flag" />
            <div>瑞典</div>
          </Box>
        );
      case '18':
        return (
          <Box key={item.value} sx={{ display: 'flex', gap: '0.5em', justifyContent: 'start', alignItems: 'center' }}>
            <CountryFlags.CH className="country-flag" />
            <div>瑞士</div>
          </Box>
        );
      default:
        return null;
    }
  };


  const handleOnChange = useCallback((ev) => {
    setValue(ev.value);
  }, []);

  return (
    <Box sx={{display:'flex',alignItems:'center'}} className="select-container">
      <HtmlTooltip
            title={
              <React.Fragment>
                <b>国家过滤器</b>
                <br />
                {"通过在此处选择所需的国家/地区，将搜索限制为特定国家/地区的公司和个人。"}
              </React.Fragment>
            }
            arrow
            placement='left'
          >
            <InfoOutlinedIcon className="info-icon" />
          </HtmlTooltip>
      <Select
        data={myData}
        display="anchored"
        inputStyle="outline"
        itemHeight={50}
        label="国家"
        labelStyle="stacked"
        placeholder="请选择..."
        selectMultiple={true}
        value={myValue}
        onChange={handleOnChange}
        renderItem={renderCustomItem}
        // className={`mbsc-ios mbsc-textfield-wrapper-box mbsc-ios ${styles.textfieldWrapperOutline}`}
        style={{ margin: 0 }}
      />
    </Box>
  );
}

export default QucikSearchFilterNew;