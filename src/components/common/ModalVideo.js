/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Modal, IconButton} from 'react-native-paper';
import {WebView} from 'react-native-webview';
import {getVideoMovieById} from 'services/movies/get-video-movie-by-id';
import Loading from 'components/common/Loading';
import {YOUTUBE_API_KEY} from 'constants/youtube';

export default function ModalVideo({show, setShow, idMovie}) {
  const [video, setVideo] = useState(null);
  const PLATFORM = 'YouTube';

  useEffect(() => {
    getVideoMovieById(idMovie)
      .then(({results}) => {
        const videoYouTube = results.find(
          trailerMovie => trailerMovie.site === PLATFORM,
        );
        setVideo(videoYouTube.key);
      })
      .catch(() => setShow(false));
  }, [idMovie]);

  return (
    <Modal visible={show} contentContainerStyle={styles.modal}>
      {!video ? (
        <Loading message="cargango video" />
      ) : (
        <WebView
          style={styles.video}
          source={{
            uri: `https://www.youtube.com/embed/${video}?controls=0&showinfo=0`,
          }}
        />
      )}
      <IconButton
        icon="close"
        onPress={() => setShow(false)}
        style={styles.close}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#000',
    height: '120%',
    alignItems: 'center',
  },
  close: {
    backgroundColor: '#1ea1f2',
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    bottom: 100,
  },
  video: {
    width: 500,
  },
});
