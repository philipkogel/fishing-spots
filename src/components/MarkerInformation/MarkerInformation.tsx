import { Stack, CardContent, CardActions, Typography, Link } from "@mui/material";
import WaterIcon from '@mui/icons-material/Water';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';
import PhishingIcon from '@mui/icons-material/Phishing';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import { Marker } from "../../types/api";

type MarkerInformationProps = {
  marker: Marker
}

const MarkerInformation = ({ marker }: MarkerInformationProps): JSX.Element => {
  return (
    <>
        <CardContent>
          <div style={{ marginBottom: '16px' }}>
            <Link variant="h6" target="_blank" href={marker.url}>{marker.name}</Link>
          </div>
          <Typography variant="body2">
            {marker.addressLineOne}
            <br />
            {marker.addressLineTwo}
          </Typography>
          <Stack direction="row" spacing={1}>
            <WaterIcon fontSize="small" />
            <Typography color="text.secondary">
            Powierzchnia wody: {marker.waterSurface}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <FormatLineSpacingIcon fontSize="small" />
            <Typography color="text.secondary">
            Głębokość: {marker.waterDepth}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <PhishingIcon fontSize="small" />
            <Typography color="text.secondary">
            Ryby: {marker.fishes}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <HorizontalRuleIcon fontSize="small" />
            <Typography color="text.secondary">
            Stanowisk: {marker.positions}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <LocalPhoneIcon fontSize="small" />
            <Typography color="text.secondary">
              <Link href={`tel:${marker.phone}`} margin="auto">
              {marker.phone}
              </Link>
            </Typography>
          </Stack>
      </CardContent>
    </>

  )
}

export default MarkerInformation;