import { Center } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Center pt={'25px'}>
            <p>Copyright © {new Date().getFullYear()} SpotiUpgrader. No way affiliated with Spotify.</p>
        </Center>
    )
}