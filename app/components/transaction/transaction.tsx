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
  currency: string;
  date: number;
  title: string;
  description: string;
  id: string;
  tags: string[];
};

const CONTAINER: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  borderWidth: 1,
  borderColor: "#000",
  paddingVertical: 10,
  paddingHorizontal: 20,
};
const BUTTON: ViewStyle = {
  height: 75,
  marginHorizontal: 20,
  marginVertical: 16,
};
const TITLE: TextStyle = {
  fontSize: 16,
  fontWeight: "600",
};
const TEXT: TextStyle = {
  fontSize: 10,
  textAlign: "right",
};
const CONTENT_CONTAINER: ViewStyle = {
  flexDirection: "column",
  height: "100%",
};

export const Transaction = ({
  amount,
  currency,
  date,
  title,
  description,
  id,
  tags,
}: TransactionProps) => {
  const tagsString = useMemo(() => tags.join(", "), [tags]);
  return (
    <TouchableOpacity style={BUTTON}>
      <View style={CONTAINER}>
        <View style={CONTENT_CONTAINER}>
          <Text style={TITLE}>{title}</Text>

          <Text style={TEXT}>{description}</Text>
        </View>

        <View style={CONTENT_CONTAINER}>
          <Text style={TEXT}>{amount}</Text>

          <Text style={TEXT}>{date}</Text>

          <Text style={TEXT}>{tagsString}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
