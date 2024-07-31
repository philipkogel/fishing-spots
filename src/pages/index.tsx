import { Grid } from '@mui/material';

import Head from 'next/head';
import Layout from '@components/Layout';
import Map from '@components/Map';
import styles from '@styles/Home.module.scss';
import MarkerInformation from "@components/MarkerInformation/MarkerInformation";
import useMarkers from '../hooks/useMarkers';

const POSITION = [51.337049, 20.17532];
const URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';
const ATTRIBUTION = 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ';

export default function Home() {
  const { data: markers } = useMarkers();

  return (
    <Layout>
      <Head>
        <title>KARPIOZA</title>
        <meta name="description" content="Z myślą o karpiarzach tworzymy największa bazę łowisk komercyjnych, prywatnych, specjalnych w Polsce. Prezentujemy zbiorniki kazdego województwa." />
        <link rel="icon" href="/logo.ico" />
        <meta property="og:title" content="KARPIOZA" />
        <meta property="og:description" content="Z myślą o karpiarzach tworzymy największa bazę łowisk komercyjnych, prywatnych, specjalnych w Polsce. Prezentujemy zbiorniki kazdego województwa.!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/" />
      </Head>

        <Grid container>
          <Grid item xs={12}>
            <Map className={styles.homeMap} height="400" center={POSITION} zoom={7}>
              {({ TileLayer, Marker, Popup }) => (
                <>
                  <TileLayer
                    url={URL}
                    attribution={ATTRIBUTION}
                  />
                  {markers.map((marker, index) => (
                    <Marker
                      key={`key-${marker.geoPosition.join(',')}`}
                      position={marker.geoPosition}
                    >
                      <Popup>
                        <MarkerInformation marker={marker} />
                      </Popup>
                    </Marker>
                  ))}
                </>
              )}
            </Map>
          </Grid>
        </Grid>
    </Layout>
  )
}
