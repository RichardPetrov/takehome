import React, { useMemo } from "react";
import {
  ViewStyle,
  TouchableOpacity,
  View,
  Text,
  TextStyle,
} from "react-native";

export type TransactionProps = {
  amount: number;
  date: number;
  title: string;
  description: string;
  tags: string[];
};

const CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  borderWidth: 1,
  borderColor: "#000",
  paddingVertical: 10,
  paddingHorizontal: 16,
};
const BUTTON: ViewStyle = {
  height: 75,
  marginHorizontal: 20,
  marginVertical: 16,
};
const TITLE: TextStyle = {
  fontSize: 14,
  fontWeight: "600",
};
const TEXT: TextStyle = {
  fontSize: 10,

};
const DETAILS: TextStyle = {
  ...TEXT,
  textAlign: "right",
};
const DESCRIPTION: TextStyle = {
  ...TEXT,
  textAlign: "left",
};
const CONTENT_CONTAINER: ViewStyle = {
  flexDirection: "column",
  height: "100%",
};

export const TransactionCard = ({
  amount,
  date,
  title,
  description,
  tags,
}: TransactionProps) => {
  const tagsString = useMemo(() => (tags ? tags.join(", ") : ""), [tags]);
  const amountString = useMemo(() => `$${(amount / 100).toFixed(2)}`, [amount]);
  const dateString = new Date(date).toDateString();

  return (
    <TouchableOpacity style={BUTTON}>
      <View style={CONTAINER}>
        <View style={CONTENT_CONTAINER}>
          <Text style={TITLE}>{title}</Text>

          <Text style={DESCRIPTION}>{description}</Text>
        </View>

        <View style={CONTENT_CONTAINER}>
          <Text style={DETAILS}>{amountString}</Text>

          <Text style={DETAILS}>{dateString}</Text>

          <Text style={DETAILS}>{tagsString}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
