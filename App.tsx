import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";

import { TransactionCard } from "./app/components/transaction/transaction";

type TransactionResponse = {
  transactions: Transaction[];
  hasMore: boolean;
};
type Transaction = {
  amount: number;
  currency: string;
  date: number;
  title: string;
  description: string;
  id: string;
  tags: string[];
};

const App: () => ReactNode = () => {
  const [
    transactions,
    setTransactions,
  ] = useState<Transaction[] | null>(null);

  const [
    hasMore,
    setHasMore,
  ] = useState(false);

  const [refreshing, setRefreshing] = useState(false);
  const fetchTransactions = (
    startAfterTransactionId?: string | null,
    limit?: number | null,
  ) => {
    setRefreshing(true);
    let query = "https://assignment.alza.app/transactions";
    if (startAfterTransactionId || limit) query += "?";
    if (startAfterTransactionId) query += `&startingAfter=${startAfterTransactionId}`;
    if (limit) query += `&limit= ${limit}`;

    return fetch(
      query,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    )
      .then((response) => {
        setRefreshing(false);
        return response.json();
      })
      .then((data) => data as TransactionResponse)
      .catch((error) => {
        setRefreshing(false);
        console.log(error);
      });
  };

  const handleFetch = () => {
    fetchTransactions()
      .then((data) => {
        if (data && data.transactions && data.hasMore) {
          setTransactions(data.transactions);
          setHasMore(data.hasMore);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    handleFetch();
  }, []);

  const handleOnEndReach = () => {
    if (hasMore && transactions && transactions.length > 0) {
      const lastTransactionId = transactions[transactions.length - 1].id;
      fetchTransactions(lastTransactionId)
        .then((data) => {
          if (data) {
            setTransactions(transactions.concat(data.transactions));
            setHasMore(data.hasMore);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleTransactionRender:
  ListRenderItem<Transaction> = ({ item }) => (
    <TransactionCard
      amount={item.amount}
      date={item.date}
      title={item.title}
      description={item.description}
      tags={item.tags}
    />
  );

  const getHeaderComponent = () => {
    if (transactions && transactions.length < 1) {
      return (<View><Text>No Data Available</Text></View>);
    }
    return null;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />

      <View style={{ flex: 1 }}>

        <FlatList
          refreshing={refreshing}
          onRefresh={handleFetch}
          style={{ height: "100%" }}
          ListHeaderComponent={getHeaderComponent}
          data={transactions}
          renderItem={handleTransactionRender}
          onEndReached={handleOnEndReach}
          onEndReachedThreshold={0.3}
        />

      </View>
    </SafeAreaView>
  );
};

export default App;
