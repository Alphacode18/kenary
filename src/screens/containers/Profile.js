import React, { useState } from 'react';
import { Layout, Text, Button } from '@ui-kitten/components';
import Firebase from '../../../config/Firebase';

export default Profile = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const handleLogout = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        onPress={handleLogout}
        style={{ width: '50%', borderRadius: 5, marginTop: 50 }}
        appearance='outline'
      >
        {loading === false ? <Text>Logout</Text> : <Spinner size='small' />}
      </Button>
    </Layout>
  );
};
