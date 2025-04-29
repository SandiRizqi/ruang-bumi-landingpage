'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/admin/dashboard/components/container/PageContainer';
// components
import SalesOverview from '@/app/admin/dashboard/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/admin/dashboard/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/admin/dashboard/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/admin/dashboard/components/dashboard/ProductPerformance';
import Blog from '@/app/admin/dashboard/components/dashboard/Blog';
import MonthlyEarnings from '@/app/admin/dashboard/components/dashboard/MonthlyEarnings';
import { StatsOverview } from '@/app/admin/dashboard/components/dashboard/StatsCard';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          {/* <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid> */}
          <StatsOverview />
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
