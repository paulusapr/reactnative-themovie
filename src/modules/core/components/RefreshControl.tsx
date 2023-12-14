import React, {useCallback, useState} from 'react';
import {RefreshControl as RC} from 'react-native';

const RefreshControl = () => {
  const [refresh, setRefresh] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  }, []);

  return <RC refreshing={refresh} onRefresh={onRefresh} />;
};

export default RefreshControl;
