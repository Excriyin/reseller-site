import React from 'react';
import { Box, Center, Link, Heading } from '@chakra-ui/react';

export default function Navbar() {
    return (
        <Box p={4}>
            <Box display="flex" alignItems="center">
                <Box mr={4}>
                    <Heading as="h1" size="lg" color="green.500">
                        <Link href='/'>
                            SpotiUpgrader
                        </Link>
                    </Heading>
                </Box>
                <Box ml="auto" display="flex" alignItems="center">
                    <Link
                        mx={4}
                        href="/upgrade"
                        fontWeight="bold"
                        _hover={{ color: 'green.500' }}
                    >
                        Upgrade
                    </Link>
                    <Link
                        mx={4}
                        href="/renew"
                        fontWeight="bold"
                        _hover={{ color: 'green.500' }}
                    >
                        Renew
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}
