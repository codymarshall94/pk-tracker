import { Stack } from "expo-router"

const LearnLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ headerShown: false, headerTitle: "Learn" }}
            />
            <Stack.Screen name="[skill]" options={{ headerTitle: "Skill" }} />
            <Stack.Screen name="recommended" options={{ headerTitle: "Recommended" }} />
        </Stack>
    )
}

export default LearnLayout