import { Box, Flex, Skeleton, SkeletonCircle } from "@chakra-ui/react";

export const UserSkeleton = () => {
  return (
    <>
      <Box w="full" h="192px" position="relative">
        <Skeleton
          position="absolute"
          roundedTop="md"
          width="full"
          height="192px"
          variant={"shine"}
          background={"bg.skeleton"}
        />
      </Box>
      <Box
        width="full"
        position="relative"
        background="bg.card"
        roundedBottom="md"
        paddingX={4}
        paddingBottom={4.5}
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={7}
      >
        <Box
          w="1060px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          position="relative"
        >
          <Box
            position="absolute"
            bottom="0"
            top={{ base: "none", mdDown: "-110px" }}
            left={{ mdDown: "50%" }}
            transform={{ mdDown: "translateX(-50%)" }}
            zIndex={2}
            margin={{ smPlusDown: "0 auto" }}
            width={{ base: "176px", smPlusDown: "154px" }}
            height={{ base: "176px", smPlusDown: "154px" }}
          >
            <SkeletonCircle
              size={{ base: "176px", smPlusDown: "154px" }}
              variant={"shine"}
              background={"bg.skeleton"}
            />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap={7}
            justifyContent="space-between"
            flexDirection={{ base: "column", smPlus: "row" }}
            flexBasis={{ base: "100%", md: "80%" }}
            marginLeft={{ base: "0px", md: "200px" }}
            marginTop={{ base: "70px", md: "0px" }}
          >
            <Flex flexDirection="column" gap="8px" width="100%" mt={"10px"}>
              <Skeleton
                h="30px"
                w="40%"
                variant={"shine"}
                background={"bg.skeleton"}
              />
              <Skeleton
                h="57px"
                w="85%"
                variant={"shine"}
                background={"bg.skeleton"}
              />
              <Skeleton
                h="23px"
                w="33%"
                variant={"shine"}
                background={"bg.skeleton"}
              />
            </Flex>
            <Skeleton
              h="38px"
              rounded="md"
              width={{ base: "134px", smDown: "full" }}
              variant={"shine"}
              background={"bg.skeleton"}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
