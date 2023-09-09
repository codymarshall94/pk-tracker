import { Stack } from "expo-router"

const LearnLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{ headerShown: false, headerTitle: "Learn" }}
            />
            <Stack.Screen name="path/[path-name]" options={{ headerTitle: "Path" }} />
            <Stack.Screen name="[skill]" options={{ headerTitle: "Skill" }} />
        </Stack>
    )
}

export default LearnLayout