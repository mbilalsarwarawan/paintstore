import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, User, Heart, Settings } from "lucide-react"

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="font-serif text-3xl lg:text-4xl font-medium text-stone-900 mb-2">My Account</h1>
          <p className="text-stone-600">Manage your orders, preferences, and account details</p>
        </div>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Favorites
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 border border-stone-200 rounded-lg">
                    <div>
                      <p className="font-medium text-stone-900">Order #MC-2024-001</p>
                      <p className="text-sm text-stone-600">Placed on March 15, 2024</p>
                      <p className="text-sm text-stone-600">3 items • £84.00</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Delivered
                      </span>
                      <Button variant="outline" size="sm" className="ml-2 bg-transparent">
                        View Details
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 border border-stone-200 rounded-lg">
                    <div>
                      <p className="font-medium text-stone-900">Order #MC-2024-002</p>
                      <p className="text-sm text-stone-600">Placed on March 22, 2024</p>
                      <p className="text-sm text-stone-600">2 items • £56.00</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        In Transit
                      </span>
                      <Button variant="outline" size="sm" className="ml-2 bg-transparent">
                        Track Order
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Smith" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.smith@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+44 7700 900123" />
                </div>
                <Button className="bg-stone-900 hover:bg-stone-800 text-white">Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>Favorite Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-4 p-4 border border-stone-200 rounded-lg">
                    <div className="w-16 h-16 bg-stone-200 rounded-lg"></div>
                    <div className="flex-1">
                      <h3 className="font-medium text-stone-900">Sage Green Limewash</h3>
                      <p className="text-sm text-stone-600">£28.00</p>
                    </div>
                    <Button size="sm" className="bg-stone-900 hover:bg-stone-800 text-white">
                      Add to Cart
                    </Button>
                  </div>

                  <div className="flex items-center space-x-4 p-4 border border-stone-200 rounded-lg">
                    <div className="w-16 h-16 bg-stone-200 rounded-lg"></div>
                    <div className="flex-1">
                      <h3 className="font-medium text-stone-900">Professional Brush Set</h3>
                      <p className="text-sm text-stone-600">£45.00</p>
                    </div>
                    <Button size="sm" className="bg-stone-900 hover:bg-stone-800 text-white">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium text-stone-900 mb-2">Email Preferences</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-stone-600">Order updates and shipping notifications</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-stone-600">New product announcements</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-stone-600">Marketing emails and promotions</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-stone-900 mb-2">Privacy Settings</h3>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm text-stone-600">Allow personalized recommendations</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-stone-600">Share usage data for improvements</span>
                    </label>
                  </div>
                </div>

                <Button className="bg-stone-900 hover:bg-stone-800 text-white">Save Preferences</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
